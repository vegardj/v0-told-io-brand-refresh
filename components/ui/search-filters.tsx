"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search, Filter, X, Calendar, Users, TrendingUp, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface FilterOption {
  id: string
  label: string
  count?: number
}

interface SearchFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  categories: FilterOption[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  sortBy: string
  onSortChange: (sort: string) => void
  timeRange: string
  onTimeRangeChange: (range: string) => void
  status: string[]
  onStatusChange: (status: string[]) => void
  className?: string
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategories,
  onCategoryChange,
  sortBy,
  onSortChange,
  timeRange,
  onTimeRangeChange,
  status,
  onStatusChange,
  className,
}: SearchFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false)

  const activeFiltersCount = selectedCategories.length + status.length + (timeRange !== "all" ? 1 : 0)

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId]
    onCategoryChange(newCategories)
  }

  const handleStatusToggle = (statusValue: string) => {
    const newStatus = status.includes(statusValue) ? status.filter((s) => s !== statusValue) : [...status, statusValue]
    onStatusChange(newStatus)
  }

  const clearAllFilters = () => {
    onCategoryChange([])
    onStatusChange([])
    onTimeRangeChange("all")
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Search and Sort Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search debates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Sort Select */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Most Recent
              </div>
            </SelectItem>
            <SelectItem value="popular">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Most Popular
              </div>
            </SelectItem>
            <SelectItem value="participants">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Most Participants
              </div>
            </SelectItem>
            <SelectItem value="oldest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Oldest First
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Filter Button */}
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="relative bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-blue-600">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="end">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Filters</h4>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
                    Clear all
                  </Button>
                )}
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">Categories</h5>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategoryToggle(category.id)}
                      className="text-xs"
                    >
                      {category.label}
                      {category.count && <span className="ml-1 opacity-70">({category.count})</span>}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">Status</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "active", label: "Active" },
                    { id: "resolved", label: "Resolved" },
                    { id: "closed", label: "Closed" },
                  ].map((statusOption) => (
                    <Button
                      key={statusOption.id}
                      variant={status.includes(statusOption.id) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleStatusToggle(statusOption.id)}
                      className="text-xs"
                    >
                      {statusOption.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Time Range */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">Time Range</h5>
                <Select value={timeRange} onValueChange={onTimeRangeChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>

          {selectedCategories.map((categoryId) => {
            const category = categories.find((c) => c.id === categoryId)
            return category ? (
              <Badge key={categoryId} variant="secondary" className="text-xs">
                {category.label}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCategoryToggle(categoryId)}
                  className="ml-1 h-auto p-0 hover:bg-transparent"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ) : null
          })}

          {status.map((statusValue) => (
            <Badge key={statusValue} variant="secondary" className="text-xs">
              {statusValue}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleStatusToggle(statusValue)}
                className="ml-1 h-auto p-0 hover:bg-transparent"
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}

          {timeRange !== "all" && (
            <Badge variant="secondary" className="text-xs">
              {timeRange}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onTimeRangeChange("all")}
                className="ml-1 h-auto p-0 hover:bg-transparent"
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
