import type { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: "1",

    image: "/images/creamy-tuscan-chicken.jpg",

    title: "Creamy Tuscan Chicken",

    summary: "Creamy garlic chicken with spinach and sun-dried tomatoes.",

    cuisine: "Italian",

    protein: ["Chicken Thighs"],

    vegetables: ["Spinach"],

    starches: ["Pasta"],

    difficulty: "Weeknight",

    kitchenEffort: "30 Minutes",

    prepTime: 10,

    cookTime: 25,

    servings: 4,

    estimatedCost: 18.5,

    rating: 4.8,

    nutrition: {
      calories: 620,
      protein: 42,
      carbs: 24,
      fat: 33,
      fiber: 4,
      sugar: 6,
      sodium: 720,
    },

    ingredients: [
      {
        id: "1",
        name: "Chicken thighs",
        amount: 2,
        unit: "lbs",
      },
      {
        id: "2",
        name: "Garlic",
        amount: 4,
        unit: "cloves",
      },
      {
        id: "3",
        name: "Heavy cream",
        amount: 1,
        unit: "cup",
      },
      {
        id: "4",
        name: "Parmesan cheese",
        amount: 0.5,
        unit: "cup",
      },
      {
        id: "5",
        name: "Spinach",
        amount: 4,
        unit: "cups",
      },
      {
        id: "6",
        name: "Sun-dried tomatoes",
        amount: 0.5,
        unit: "cup",
      },
    ],

    instructions: [
      {
        step: 1,
        instruction: "Season the chicken thighs with salt and pepper.",
      },
      {
        step: 2,
        instruction: "Sear the chicken until golden brown.",
        timerMinutes: 8,
      },
      {
        step: 3,
        instruction: "Cook the garlic, then add cream and parmesan.",
        timerMinutes: 5,
      },
      {
        step: 4,
        instruction: "Stir in spinach and sun-dried tomatoes.",
        timerMinutes: 3,
      },
      {
        step: 5,
        instruction: "Return the chicken to the pan and simmer until cooked through.",
        timerMinutes: 10,
      },
    ],
  },
];