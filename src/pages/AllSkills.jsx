import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import {
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
  FaSearch,
  FaTimes,
  FaStar,
  FaClock,
  FaDollarSign,
  FaFire,
} from "react-icons/fa";

const AllSkills = () => {
  const initialData = useLoaderData();
  const [skills, setSkills] = useState(initialData);
  const [filteredSkills, setFilteredSkills] = useState(initialData);
  const [sortOrder, setSortOrder] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    skillType: "all",
    priceRange: "all",
    rating: "all",
    availability: "all",
  });

  // Filter categories based on your data structure
  const categories = [
    "all",
    ...Array.from(new Set(initialData.map((skill) => skill.category))).filter(
      Boolean
    ),
  ];

  // Skill types (if available in your data)
  const skillTypes = ["all", "online", "in-person", "hybrid"];

  // Price ranges
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "free", label: "Free" },
    { value: "0-20", label: "Under $20" },
    { value: "20-50", label: "$20 - $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100+", label: "$100+" },
  ];

  // Ratings
  const ratings = [
    { value: "all", label: "All Ratings" },
    { value: "4.5+", label: "4.5+ Stars" },
    { value: "4.0+", label: "4.0+ Stars" },
    { value: "3.5+", label: "3.5+ Stars" },
    { value: "3.0+", label: "3.0+ Stars" },
  ];

  // Sorting functions
  const sortSkills = (skillsToSort, order) => {
    const sorted = [...skillsToSort];

    switch (order) {
      case "price-asc":
        return sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      case "price-desc":
        return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      case "rating-desc":
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "rating-asc":
        return sorted.sort((a, b) => (a.rating || 0) - (b.rating || 0));
      case "newest":
        return sorted.sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
      case "oldest":
        return sorted.sort(
          (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
        );
      case "popular":
        return sorted.sort(
          (a, b) => (b.studentsCount || 0) - (a.studentsCount || 0)
        );
      default:
        return sorted;
    }
  };

  // Apply filters

  // Handle filter change
  const handleFilterChange = (filterName, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      category: "all",
      skillType: "all",
      priceRange: "all",
      rating: "all",
      availability: "all",
    });
    setSearchTerm("");
    setSortOrder("default");
  };

  // Check if any filter is active
  const isAnyFilterActive = () => {
    return (
      activeFilters.category !== "all" ||
      activeFilters.skillType !== "all" ||
      activeFilters.priceRange !== "all" ||
      activeFilters.rating !== "all" ||
      activeFilters.availability !== "all" ||
      searchTerm !== "" ||
      sortOrder !== "default"
    );
  };

  // Apply filters when dependencies change
  useEffect(() => {
    const applyFilters = () => {
      let result = [...skills];

      // Search filter
      if (searchTerm) {
        result = result.filter(
          (skill) =>
            skill.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            skill.description
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            skill.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            skill.instructorName
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
        );
      }

      // Category filter
      if (activeFilters.category !== "all") {
        result = result.filter(
          (skill) => skill.category === activeFilters.category
        );
      }

      // Skill type filter
      if (activeFilters.skillType !== "all") {
        result = result.filter(
          (skill) => skill.skillType === activeFilters.skillType
        );
      }

      // Price range filter
      if (activeFilters.priceRange !== "all") {
        switch (activeFilters.priceRange) {
          case "free":
            result = result.filter(
              (skill) => !skill.price || skill.price === 0
            );
            break;
          case "0-20":
            result = result.filter(
              (skill) => skill.price > 0 && skill.price <= 20
            );
            break;
          case "20-50":
            result = result.filter(
              (skill) => skill.price > 20 && skill.price <= 50
            );
            break;
          case "50-100":
            result = result.filter(
              (skill) => skill.price > 50 && skill.price <= 100
            );
            break;
          case "100+":
            result = result.filter((skill) => skill.price > 100);
            break;
        }
      }

      // Rating filter
      if (activeFilters.rating !== "all") {
        const minRating = parseFloat(activeFilters.rating);
        result = result.filter((skill) => skill.rating >= minRating);
      }

      // Apply sorting
      result = sortSkills(result, sortOrder);

      setFilteredSkills(result);
    };
    applyFilters();
  }, [searchTerm, activeFilters, sortOrder, skills]);

  // Get active filter count
  const getActiveFilterCount = () => {
    let count = 0;
    if (activeFilters.category !== "all") count++;
    if (activeFilters.skillType !== "all") count++;
    if (activeFilters.priceRange !== "all") count++;
    if (activeFilters.rating !== "all") count++;
    if (activeFilters.availability !== "all") count++;
    if (searchTerm) count++;
    if (sortOrder !== "default") count++;
    return count;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-10 sm:pt-32 bg-linear-to-tl from-[#7209B7] via-[#3A0CA3] to-[#3F37C9]">
        <div className="container mx-auto px-5">
          <h1 className="sm:text-5xl text-3xl text-center font-bold text-white">
            Discover Skills, Build Your Future
          </h1>
          <p className="text-white text-center mt-5 max-w-2xl mx-auto">
            Browse all skills shared by learners, creators, and experts across
            the platform.
          </p>
        </div>
      </section>

      {/* Search and Controls Section */}
      <div className="container mx-auto px-5 py-6">
        {/* Main Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-3xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search skills by title, category, or instructor..."
              className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-[#560BAD] focus:ring-2 focus:ring-[#560BAD]/20 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Results Count */}
          <div className="text-gray-700">
            <span className="font-semibold text-[#560BAD]">
              {filteredSkills.length}
            </span>{" "}
            skills found
            {getActiveFilterCount() > 0 && (
              <span className="ml-2 text-sm text-gray-500">
                ({getActiveFilterCount()} filter
                {getActiveFilterCount() !== 1 ? "s" : ""} applied)
              </span>
            )}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-3">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                showFilters || isAnyFilterActive()
                  ? "bg-[#560BAD] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <FaFilter />
              Filter {isAnyFilterActive() && `(${getActiveFilterCount()})`}
            </button>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                {sortOrder === "price-asc" ? (
                  <>
                    <FaSortAmountUp /> Price: Low to High
                  </>
                ) : sortOrder === "price-desc" ? (
                  <>
                    <FaSortAmountDown /> Price: High to Low
                  </>
                ): (
                  <>
                    <FaSortAmountDown /> Sort By
                  </>
                )}
              </button>

              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2">
                  <button
                    onClick={() => setSortOrder("default")}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      sortOrder === "default"
                        ? "text-[#560BAD] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Default Order
                  </button>
                  
                  
                  <button
                    onClick={() => setSortOrder("price-asc")}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      sortOrder === "price-asc"
                        ? "text-[#560BAD] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FaSortAmountUp /> Price: Low to High
                    </div>
                  </button>
                  <button
                    onClick={() => setSortOrder("price-desc")}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      sortOrder === "price-desc"
                        ? "text-[#560BAD] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FaSortAmountDown /> Price: High to Low
                    </div>
                  </button>
                  
                </div>
              </div>
            </div>

            {/* Reset Button */}
            {isAnyFilterActive() && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
              >
                <FaTimes />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200 animate__animated animate__fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Filter Skills
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={activeFilters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#560BAD] focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={activeFilters.priceRange}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#560BAD] focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Active Filters Display */}
            {isAnyFilterActive() && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Active Filters:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.category !== "all" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      Category: {activeFilters.category}
                      <button
                        onClick={() => handleFilterChange("category", "all")}
                        className="ml-1 text-purple-600 hover:text-purple-800"
                      >
                        <FaTimes size={12} />
                      </button>
                    </span>
                  )}
                  {activeFilters.priceRange !== "all" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Price:{" "}
                      {
                        priceRanges.find(
                          (r) => r.value === activeFilters.priceRange
                        )?.label
                      }
                      <button
                        onClick={() => handleFilterChange("priceRange", "all")}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        <FaTimes size={12} />
                      </button>
                    </span>
                  )}
                  {activeFilters.rating !== "all" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Rating: {activeFilters.rating}
                      <button
                        onClick={() => handleFilterChange("rating", "all")}
                        className="ml-1 text-yellow-600 hover:text-yellow-800"
                      >
                        <FaTimes size={12} />
                      </button>
                    </span>
                  )}
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm("")}
                        className="ml-1 text-green-600 hover:text-green-800"
                      >
                        <FaTimes size={12} />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.skillId} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No skills found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2 bg-[#560BAD] text-white rounded-lg hover:bg-purple-700 transition"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSkills;
