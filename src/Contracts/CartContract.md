# 🛒 Contrato del CartContext

## CartItem
```ts
type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart(item: CartItem): void;
  removeFromCart(id: string): void;
  clearCart(): void;
}
