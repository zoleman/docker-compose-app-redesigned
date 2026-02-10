import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Check,
    Circle,
    Plus,
    Trash2,
    ChevronDown,
    ChevronUp,
    ShoppingBag,
    CheckCircle2,
} from "lucide-react";

const storeInfo = {
    tesco: { name: "Tesco", color: "bg-blue-500" },
    aldi: { name: "Aldi", color: "bg-orange-500" },
    lidl: { name: "Lidl", color: "bg-yellow-500" },
    spar: { name: "Spar", color: "bg-green-600" },
};

// need to separeta another files
function NoteItem({ item, onToggle, onDelete }) {
    const [expanded, setExpanded] = useState(false);

    const cheapestStore = Object.entries(item.prices).sort((a, b) => a[1] - b[1])[0];
    const cheapestPrice = cheapestStore[1];
    const mostExpensive = Math.max(...Object.values(item.prices));
    const savings = mostExpensive - cheapestPrice;

    return (
        <div
            className={`group relative border-b border-border/50 last:border-b-0 transition-all ${item.checked ? "opacity-60" : ""
                }`}
        >
            <div className="flex items-start gap-3 py-4 px-2">
                {/* Checkbox */}
                <button
                    onClick={() => onToggle(item.id)}
                    className={`mt-1 shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${item.checked
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-muted-foreground/40 hover:border-primary"
                        }`}
                >
                    {item.checked && <Check className="h-4 w-4" />}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                        <span
                            style={{ fontFamily: 'var(--font-handwriting)' }}
                            className={`text-xl ${item.checked ? "line-through text-muted-foreground" : "text-foreground"
                                }`}
                        >
                            {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                            {!item.checked && savings > 0 && (
                                <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                                    -{savings} Euro
                                </Badge>
                            )}
                            <button
                                onClick={() => onDelete(item.id)}
                                className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive transition-all"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-1">
                        <span style={{ fontFamily: 'var(--font-handwriting)' }} className="text-muted-foreground">
                            {item.quantity} {item.unit}
                        </span>
                        {!item.checked && (
                            <>
                                <span className="text-muted-foreground">·</span>
                                <span className="text-sm text-primary font-medium">
                                    {cheapestPrice} Euro
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    ({storeInfo[cheapestStore[0]].name})
                                </span>
                            </>
                        )}
                    </div>

                    {/* Expandable prices */}
                    {!item.checked && (
                        <>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="flex items-center gap-1 mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {expanded ? (
                                    <>
                                        <ChevronUp className="h-3 w-3" />
                                        Price hiding
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="h-3 w-3" />
                                        View all
                                    </>
                                )}
                            </button>

                            {expanded && (
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                    {Object.entries(item.prices)
                                        .sort((a, b) => a[1] - b[1])
                                        .map(([store, price], index) => (
                                            <div
                                                key={store}
                                                className={`flex items-center justify-between p-2 rounded-lg text-sm ${index === 0
                                                        ? "bg-primary/10 border border-primary/20"
                                                        : "bg-muted/50"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${storeInfo[store].color}`} />
                                                    <span className="text-foreground">{storeInfo[store].name}</span>
                                                </div>
                                                <span className={index === 0 ? "font-medium text-primary" : "text-muted-foreground"}>
                                                    {price} Euro
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export function NotesList({ activeItems, checkedItems, onToggle, onDelete, onAdd }) {
  const [newItemName, setNewItemName] = useState("");

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