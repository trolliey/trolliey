import { Avatar } from "@chakra-ui/react"
import picture from '../../assets/cat-travel.jpg'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import ProductsDropdown from "./ProductsDropdown"

const products = [
    { name: 'hp 250 g5', description: 'iam a descripion of the product', seller: 'tatendaZw', status: 'special', picture: picture },
    { name: 'hp 250 g5', description: 'iam a descripion of the product', seller: 'tatendaZw', status: 'special', picture: picture },

]

export default function ProductsTable() {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <div className="grid grid-cols-5 capitalize py-2 border-b border-gray-300 mb-2">
                <div className="flex flex-row col-span-1 items-center gap-4">
                    <div className="text-gray-900 font-semibold">
                        title
                    </div>
                </div>
                <div className="flex col-span-2">
                    <p className="text-gray-900 font-semibold">description</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900 font-semibold">status</p>
                </div>
                <div className="flex col-span-1">
                    <p className="text-gray-900 font-semibold"></p>
                </div>
            </div>
            {
                products?.map((product, index) => (
                    <div key={index} className="grid grid-cols-5 py-2 border-b border-gray-300 mb-2 text-sm items-center">
                        <div className="flex flex-row col-span-1 items-center gap-4">
                            <Avatar rounded="md" size="sm" />
                            <div className="flex flex-col">
                                <div className="text-gray-900 font-semibold text-sm">
                                    {product.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                    {product.seller}
                                </div>
                            </div>
                        </div>
                        <div className="flex col-span-2">
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                        <div className="flex col-span-1">
                            <p className="text-gray-700">{product.status}</p>
                        </div>
                        <div className="flex col-span-1">
                            <div className="flex flex-col cursor-pointer">
                                {/* <DotsHorizontalIcon height={16} width={16} className="text-gray-700" /> */}
                                <ProductsDropdown />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
