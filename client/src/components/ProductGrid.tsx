import { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return true;
    
    if (category.subcategory) {
      return product.category === category.category && product.subcategory === category.subcategory;
    }
    
    return product.category === category.category;
  });

  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" data-testid="text-products-title">
            OUR <span className="text-primary">ARSENAL</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium" data-testid="text-products-subtitle">
            Premium supplements and gear engineered for champions
          </p>
        </div>

        {/* Desktop Filter Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              data-testid={`button-filter-${category.id}`}
              className="font-bold"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Mobile Filter Dropdown */}
        <div className="md:hidden mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full" data-testid="select-category-mobile">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id} data-testid={`option-${category.id}`}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg" data-testid="text-no-products">
              No products found in this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
