'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (toolId: string) => void;
  removeFavorite: (toolId: string) => void;
  isFavorite: (toolId: string) => boolean;
  toggleFavorite: (toolId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 從 localStorage 載入收藏
  useEffect(() => {
    const stored = localStorage.getItem('ai-tools-favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // 儲存到 localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ai-tools-favorites', JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addFavorite = (toolId: string) => {
    setFavorites(prev => {
      if (prev.includes(toolId)) return prev;
      return [...prev, toolId];
    });
  };

  const removeFavorite = (toolId: string) => {
    setFavorites(prev => prev.filter(id => id !== toolId));
  };

  const isFavorite = (toolId: string) => {
    return favorites.includes(toolId);
  };

  const toggleFavorite = (toolId: string) => {
    if (isFavorite(toolId)) {
      removeFavorite(toolId);
    } else {
      addFavorite(toolId);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
