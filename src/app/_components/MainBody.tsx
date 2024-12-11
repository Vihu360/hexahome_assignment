"use client"
import React, { useState } from 'react'
import { FilterCheckbox } from './_filters/FilterCheckbox'
import { FilterSection } from './_filters/FilterSection'
import { ArrowUpDown, ChevronDown } from 'lucide-react'
import PropertyCard from './PropertyCard'
const MainBody = () => {

    const properties = [
        {
          Buildingtype: 'Apartment',
          bhkType: '1BHK Apartment for sale',
          location: 'in Colaba, Mumbai',
          ownerName: 'Vivek barnwal',
          price: '55L',
          feature1: '🏡 Freehold',
          feature2: '📆 1 year Old',
          feature3: '🛏️ Unfurnished'
        },
        {
          Buildingtype: 'Villa',
          bhkType: '2BHK Villa for sale',
          location: 'in Andheri West, Mumbai',
          ownerName: 'Rahul Kumar',
          price: '1.2Cr',
          feature1: '👯 Co operative',
        },
        {
          Buildingtype: 'Builder House',
          bhkType: '3BHK Builder House for sale',
          location: 'in Powai, Mumbai',
          ownerName: 'Pankaj malang',
          price: '90L',
          feature1: '🏗️ Under construction',
        },
        {
          Buildingtype: 'Residential Plot',
          bhkType: '4BHK Residential Plot for sale',
          location: 'in Andheri, Mumbai',
          ownerName: 'Soni aryan',
          price: '75.23L',
          feature1: '🏡 Freehold',
          feature2: '👷 Gated community',
        }
      ];
      

    const filterSection1 = ["Apartment", "Builder Floor", "Independent House", "Villa", "1Rk/Studio House"];
    const filterSection2 = ["Ready to move", "Under Construction"];
    const filterSection3 = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
    const filterSection4 = ["Under ₹50 Lac",
        "₹50 Lac - 1 Cr",
        "₹1 Cr - 1.5 Cr",
        "₹1.5 Cr - 2 Cr",
        "Above ₹2 Cr"];
    const filterSection5 = ["furnished", "semifurnished", "unfurnished"];
    const filterSection6 = ["North", "South", "East", "West", "North East", "North West"];
    const filterSection7 = ["Owner", "dealer", "Builder"]

    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
        propertyType: [],
        propertyCondition: [],
        bhkType: [],
        budget: [],
        furnishType: [],
        facing: [],
        postedBy: []
    });

    const handleFilterChange = (category: string, value: string) => {
        setSelectedFilters((prev) => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };


    return (
        <div className='min-h-screen w-full border-black border px-6 md:px-14 lg:px-20 flex flex-col'>
            <div className=' p-3 hidden lg:flex'>
                {/* dynamic value to be in place */}
                <p className='text-gray-600'>Home  property for Buy in Gurgaon </p>
            </div>

            <div className='flex justify-between gap-10'>
                <div className="w-5/12 bg-white rounded-lg shadow-sm border hidden lg:block ">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                            <button
                                onClick={() => setSelectedFilters({
                                    propertyType: [],
                                    propertyCondition: [],
                                    bhkType: [],
                                    budget: [],
                                    furnishType: [],
                                    facing: [],
                                    postedBy: []
                                })}
                                className="text-sm text-blue-600 hover:text-blue-800"
                            >
                                Clear All
                            </button>
                        </div>
                    </div>

                    <div className="p-4">
                        <FilterSection title="Property Type">
                            {filterSection1.map((type) => (
                                <FilterCheckbox
                                    key={type}
                                    label={type}
                                    value={type}
                                    checked={selectedFilters.propertyType.includes(type)}
                                    onChange={(value) => handleFilterChange("propertyType", value)}
                                />
                            ))}
                        </FilterSection>

                        <FilterSection title="Property Condition">
                            {filterSection2.map((condition) => (
                                <FilterCheckbox
                                    key={condition}
                                    label={condition}
                                    value={condition}
                                    checked={selectedFilters.propertyCondition.includes(condition)}
                                    onChange={(value) => handleFilterChange("propertyCondition", value)}
                                />
                            ))}
                        </FilterSection>

                        <FilterSection title="BHK Type">
                            {filterSection3.map((type) => (
                                <FilterCheckbox
                                    key={type}
                                    label={type}
                                    value={type}
                                    checked={selectedFilters.bhkType.includes(type)}
                                    onChange={(value) => handleFilterChange("bhkType", value)}
                                />
                            ))}
                        </FilterSection>

                        <FilterSection title="Budget">
                            {filterSection4.map((range) => (
                                <FilterCheckbox
                                    key={range}
                                    label={range}
                                    value={range}
                                    checked={selectedFilters.budget.includes(range)}
                                    onChange={(value) => handleFilterChange("budget", value)}
                                />
                            ))}
                        </FilterSection>

                        <FilterSection title='Furnish Type'>
                            {filterSection5.map((furnishType) => (
                                <FilterCheckbox
                                    key={furnishType}
                                    label={furnishType}
                                    value={furnishType}
                                    checked={selectedFilters.furnishType.includes(furnishType)}
                                    onChange={(value) => handleFilterChange("furnishType", value)}
                                />
                            ))}
                        </FilterSection>

                        <FilterSection title="facing">
                            {filterSection6.map((facing) => (
                                <FilterCheckbox
                                    key={facing}
                                    label={facing}
                                    value={facing}
                                    checked={selectedFilters.facing.includes(facing)}
                                    onChange={(value) => handleFilterChange("facing", value)}
                                />
                            ))}
                        </FilterSection>

                        <FilterSection title="Posted By">
                            {filterSection7.map((postedBy) => (
                                <FilterCheckbox
                                    key={postedBy}
                                    label={postedBy}
                                    value={postedBy}
                                    checked={selectedFilters.postedBy.includes(postedBy)}
                                    onChange={(value) => handleFilterChange("postedBy", value)}
                                />
                            ))}
                        </FilterSection>

                    </div>
                </div>
                <div className='w-full '>
                    <div className='flex justify-between mb-6'>
                        <p className='font-bold hidden lg:block'>Property for sale in Gurgaon</p>
                        <button className="flex items-center border px-2 font-semibold rounded-full 
                        gap-2 text-sm text-black hover:text-gray-900">
                            <ArrowUpDown className="w-4 h-4 text-gray-500" />
                            <span className='text-gray-500 font-semibold'>
                                Sort by:
                            </span>
                            Price (Low to High)
                            <ChevronDown className="w-4 h-4 text-black" />
                        </button>

                    </div>
                    <div className='lg:overflow-scroll lg:h-screen hide-scrollbar'>
                       {properties.map((property, index) => (
                        <PropertyCard
                        key={index}
                        Buildingtype={property.Buildingtype}
                        bhkType={property.bhkType}
                        location={property.location}
                        price={property.price}
                        ownerName={property.ownerName}
                        feature1={property.feature1}
                        feature2={property.feature2}
                        feature3={property.feature3}
                        />
                       ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody