import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const Cart = () => {
  const { 
    items, 
    isOpen, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    getTotalItems,
    toggleCart 
  } = useCart();

  return (
    <>
      {/* Cart Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40"
          onClick={toggleCart}
        />
      )}

      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-primary text-white">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <h2 className="text-lg font-bold">
              Shopping Cart ({getTotalItems()})
            </h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleCart}
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <ScrollArea className="flex-1 p-4 max-h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-30" />
              <p className="text-muted-foreground text-lg font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">Add products to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="bg-card border rounded-lg p-3">
                  <div className="flex gap-3">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded border"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-clamp-2 text-sm mb-1">
                        {item.title}
                      </h3>
                      <Badge variant="outline" className="text-xs mb-2">
                        {item.category}
                      </Badge>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-lg">
                          ₹{item.price.toLocaleString()}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive/80 h-8 w-8 p-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-7 w-7 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-10 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-sm font-medium">
                      Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t bg-muted/30 p-4 space-y-3">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span className="text-primary text-2xl">
                ₹{getTotalPrice().toLocaleString()}
              </span>
            </div>
            
            <div className="space-y-2">
              <Button 
                variant="default" 
                className="w-full font-semibold" 
                size="lg"
              >
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={clearCart}
                size="sm"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
