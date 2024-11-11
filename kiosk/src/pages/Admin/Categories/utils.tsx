import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { CategoryService } from "@/resources/adminCategories";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryService.getCategories();
        // Map over categories to extract id and name
        const mappedCategories = data.map((category) => ({
          id: category.id,
          name: category.name,
        }));
        setCategories(mappedCategories);
      } catch (error) {
        enqueueSnackbar("Cannot fetch categories", { variant: "error" });
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

export const useSubcategories = (categoryId) => {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!categoryId) {
      setSubcategories([]);
      return;
    }

    const fetchSubcategories = async () => {
      setLoading(true);
      try {
        const data = await CategoryService.getSubcategories(categoryId);
        setSubcategories(data);
      } catch (error) {
        enqueueSnackbar("Cannot fetch subcategories", { variant: "error" });
        console.error(
          `Error fetching subcategories for category ${categoryId}:`,
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  return { subcategories, loading };
};
