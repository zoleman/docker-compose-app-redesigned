import React, { useState } from 'react'
import NoteItem from './NoteItem';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Circle,
    Plus,
    ShoppingBag,
    CheckCircle2,
} from "lucide-react";


export function NotesList({ activeItems, checkedItems, onToggle, onDelete, onAdd }) {

  const [newItemName, setNewItemName] = useState("");


  const COLORS = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-pink-500",
];

const storeInfo = React.useMemo(() => {
  const info = {};
  let colorIndex = 0;

  [...activeItems, ...checkedItems].forEach(item => {
    item.prices?.forEach(({ storeName }) => {
      const key = storeName.toLowerCase();

      if (!info[key]) {
        info[key] = {
          name: storeName,
          color: COLORS[colorIndex % COLORS.length]
        };
        colorIndex++;
      }
    });
  });

  return info;
}, [activeItems, checkedItems,COLORS]);


  const handleAdd = () => {
    if (newItemName.trim()) {
      onAdd(newItemName);
      setNewItemName("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-border/50 bg-muted/30">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <span style={{ fontFamily: 'var(--font-handwriting)' }} className="text-2xl">Shipping List</span>
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {activeItems.length} To buy
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Add new item */}
        <div className="p-4 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-2">
            <div className="shrink-0 w-6 h-6 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
              <Plus className="h-3 w-3 text-muted-foreground/50" />
            </div>
            <Input
              type="text"
              placeholder="Add new grocery..."
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ fontFamily: 'var(--font-handwriting)' }}
              className="flex-1 border-0 bg-transparent text-lg placeholder:text-muted-foreground/50 focus-visible:ring-0 px-0"
            />
            <Button
              onClick={handleAdd}
              size="sm"
              disabled={!newItemName.trim()}
              className="shrink-0"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>

        {/* Active items */}
        <div className="divide-y-0">
          {activeItems.length === 0 ? (
            <div className="py-12 text-center">
              <Circle className="h-12 w-12 mx-auto text-muted-foreground/30 mb-3" />
              <p style={{ fontFamily: 'var(--font-handwriting)' }} className="text-muted-foreground text-lg">
                The list is empty
              </p>
              <p className="text-sm text-muted-foreground/70">
                Bring the products upstairs
              </p>
            </div>
          ) : (
            <div className="px-2">
              {activeItems.map((item) => (
                <NoteItem
                  key={item.id}
                  item={item}
                  onToggle={onToggle}
                  onDelete={onDelete}
                  storeInfo={storeInfo}
                />
              ))}
            </div>
          )}
        </div>

        {/* Checked items */}
        {checkedItems.length > 0 && (
          <div className="border-t border-border/50">
            <div className="px-4 py-3 bg-muted/30 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Purchased ({checkedItems.length})
              </span>
            </div>
            <div className="px-2 bg-muted/10">
              {checkedItems.map((item) => (
                <NoteItem
                  key={item.id}
                  item={item}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}