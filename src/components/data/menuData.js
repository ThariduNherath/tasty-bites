// Import Lucide icons
import {
    Utensils,
    Sandwich,
    Pizza,
    Salad,
    Fish,
    Cake,
    Drumstick,
    Leaf,
    ChefHat
  } from "lucide-react";
  
  export const menuItems = [
    {
      id: 1,
      name: "Gourmet Burger",
      description:
        "Premium angus beef with special sauce, fresh vegetables, and melted cheese",
      price: 450.00,
      category: "burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
      popular: true,
      ingredients: ["Angus Beef", "Lettuce", "Tomato", "Special Sauce"],
      prepTime: "15-20 min",
      calories: 650
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description:
        "Classic pizza with fresh tomatoes, mozzarella, and basil on thin crust",
      price: 360.00,
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop",
      popular: true,
      ingredients: ["Fresh Tomatoes", "Mozzarella", "Basil", "Thin Crust"],
      prepTime: "20-25 min",
      calories: 800
    },
    {
      id: 3,
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce with Caesar dressing, parmesan, and homemade croutons",
      price: 900,
      category: "salads",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop",
      popular: false,
      ingredients: [
        "Romaine Lettuce",
        "Parmesan",
        "Croutons",
        "Caesar Dressing"
      ],
      prepTime: "10 min",
      calories: 320
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      description:
        "Creamy pasta with smoked bacon, parmesan cheese, and black pepper",
      price: 1570.00,
      category: "pasta",
      image:
        "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFzdGElMjBDYXJib25hcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      popular: true,
      ingredients: ["Spaghetti", "Smoked Bacon", "Parmesan", "Eggs"],
      prepTime: "18-22 min",
      calories: 720
    },
    {
      id: 5,
      name: "Grilled Salmon",
      description:
        "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
      price: 1900.00,
      category: "seafood",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop",
      popular: false,
      ingredients: ["Atlantic Salmon", "Lemon Butter", "Seasonal Vegetables"],
      prepTime: "25-30 min",
      calories: 480
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with melting center, served with vanilla ice cream",
      price: 650.00,
      category: "desserts",
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop",
      popular: true,
      ingredients: ["Dark Chocolate", "Vanilla Ice Cream", "Fresh Berries"],
      prepTime: "12-15 min",
      calories: 420
    },
    {
      id: 7,
      name: "BBQ Chicken Wings",
      description:
        "Crispy chicken wings glazed with homemade BBQ sauce, served with ranch",
      price: 700.00,
      category: "appetizers",
      image:
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=400&fit=crop",
      popular: true,
      ingredients: ["Chicken Wings", "BBQ Sauce", "Ranch Dressing"],
      prepTime: "20-25 min",
      calories: 580
    },
    {
      id: 8,
      name: "Vegetable Stir Fry",
      description:
        "Fresh seasonal vegetables stir-fried in teriyaki sauce with tofu",
      price: 650.00,
      category: "vegetarian",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop",
      popular: false,
      ingredients: ["Seasonal Vegetables", "Tofu", "Teriyaki Sauce"],
      prepTime: "15-20 min",
      calories: 380
    }
  ];
  
  // ✅ Replaced emoji icons with Lucide icon components
  export const categories = [
    { id: "all", name: "All Menu", icon: Utensils },
    { id: "burgers", name: "Burgers", icon: Sandwich },
    { id: "pizza", name: "Pizza", icon: Pizza },
    { id: "pasta", name: "Pasta", icon: ChefHat },
    { id: "salads", name: "Salads", icon: Salad },
    { id: "seafood", name: "Seafood", icon: Fish },
    { id: "desserts", name: "Desserts", icon: Cake },
    { id: "appetizers", name: "Appetizers", icon: Drumstick },
    { id: "vegetarian", name: "Vegetarian", icon: Leaf }
  ];
  
  export const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Blogger",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      rating: 5,
      comment:
        "The best food delivery experience I've ever had! The flavors are incredible and delivery is always on time."
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment:
        "Consistently amazing quality. I order from here at least twice a week! The burgers are to die for."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Food Critic",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment:
        "As a food critic, I'm impressed by the attention to detail and authentic flavors in every dish."
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Local Chef",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment:
        "The ingredients are always fresh and the recipes are authentic. A true culinary delight!"
    }
  ];
  