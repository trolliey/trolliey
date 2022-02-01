import React from 'react';

function ProductLoading() {
    return (
        <div className='w-full min-h-96'>
            <div class="p-1 max-w-sm w-full mx-auto rounded-lg">
                <div class="relative animate-pulse group flex flex-col items-center">
                    <div class="rounded-lg overflow-hidden md:h-56 h-40 bg-gray-400 w-full aspect-w-1 aspect-h-1 group-hover:opacity-75"></div>
                    <div class="flex-1 flex-col flex space-y-4 py-1 w-full mt-4">
                        <div class="h-4 bg-gray-500 rounded w-3/4"></div>
                        <div class="space-y-2 w-full flex flex-col">
                            <div class="h-4 bg-gray-500 rounded w-full"></div>
                            <div class="h-4 bg-gray-500 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLoading;
