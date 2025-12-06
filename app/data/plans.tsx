import { Leaf, Zap, Droplets, Flame } from "lucide-react";

export const plans = {
    lite: {
        id: "lite",
        name: "Lite & Glow",
        icon: <Leaf className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1635709579812-b3256d639756?auto=format&fit=crop&w=800&q=80",
        color: "bg-brand-lime",
        textColor: "text-brand-lime",
        description: "Perfect for weight management, skin health, and light office snacking.",
        schedule: [
            { day: "Monday", title: "The Red Detox", ingredients: "Watermelon, Pomegranate, Apple", icon: <Droplets className="w-4 h-4 text-blue-500" />, image: "https://images.unsplash.com/photo-1550495796-9d894961ec58?auto=format&fit=crop&w=800&q=80" },
            { day: "Tuesday", title: "Citrus Burst", ingredients: "Orange, Kiwi, Pineapple", icon: <Zap className="w-4 h-4 text-yellow-500" />, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" },
            { day: "Wednesday", title: "Green Cleanse", ingredients: "Guava, Green Apple, Cucumber", icon: <Leaf className="w-4 h-4 text-green-500" />, image: "https://images.unsplash.com/photo-1754542074591-ea2cd1a7cd72?auto=format&fit=crop&w=800&q=80" },
            { day: "Thursday", title: "Tropical Glow", ingredients: "Papaya, Muskmelon, Pineapple", icon: <Droplets className="w-4 h-4 text-orange-500" />, image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80" },
            { day: "Friday", title: "Berry Antioxidant", ingredients: "Grapes, Pomegranate, Strawberry", icon: <Flame className="w-4 h-4 text-red-500" />, image: "https://images.unsplash.com/photo-1587361542166-bf1f7c501d48?auto=format&fit=crop&w=800&q=80" },
            { day: "Saturday", title: "Weekend Hydration", ingredients: "Watermelon, Coconut Chunks, Mint", icon: <Droplets className="w-4 h-4 text-blue-400" />, image: "https://images.unsplash.com/photo-1587921142635-459150da9f29?auto=format&fit=crop&w=800&q=80" },
        ]
    },
    energy: {
        id: "energy",
        name: "Energy & Power",
        icon: <Zap className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1526364163643-89e30b8fcb70?auto=format&fit=crop&w=800&q=80",
        color: "bg-brand-orange",
        textColor: "text-brand-orange",
        description: "High carb & protein focus for gym-goers and active lifestyles.",
        schedule: [
            { day: "Monday", title: "Power Pump", ingredients: "Banana, Chickoo, Dates, Peanut Butter", icon: <Zap className="w-4 h-4 text-yellow-600" />, image: "https://images.unsplash.com/photo-1526364163643-89e30b8fcb70?auto=format&fit=crop&w=800&q=80" },
            { day: "Tuesday", title: "Muscle Recovery", ingredients: "Pineapple, Papaya, Pumpkin Seeds", icon: <Leaf className="w-4 h-4 text-green-600" />, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" },
            { day: "Wednesday", title: "Carb Loader", ingredients: "Apple, Banana, Black Raisins", icon: <Flame className="w-4 h-4 text-red-600" />, image: "https://images.unsplash.com/photo-1734771573616-7cb630b439bc?auto=format&fit=crop&w=800&q=80" },
            { day: "Thursday", title: "Pre-Workout Fuel", ingredients: "Chickoo, Pomegranate, Coffee Dust", icon: <Zap className="w-4 h-4 text-orange-600" />, image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80" },
            { day: "Friday", title: "Strength Builder", ingredients: "Guava, Banana, Mixed Nuts", icon: <Flame className="w-4 h-4 text-red-500" />, image: "https://images.unsplash.com/photo-1708963993351-e30633c102ce?auto=format&fit=crop&w=800&q=80" },
            { day: "Saturday", title: "Cheat Day Treat", ingredients: "Mango (Seasonal) or Mixed Exotic, Honey", icon: <Droplets className="w-4 h-4 text-yellow-500" />, image: "https://images.unsplash.com/photo-1644204010805-90a62ab0bdc9?auto=format&fit=crop&w=800&q=80" },
        ]
    }
};
