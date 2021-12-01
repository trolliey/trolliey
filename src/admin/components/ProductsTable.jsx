import { Avatar } from "@chakra-ui/react"
import ProductsDropdown from "./ProductsDropdown"

export default function ProductsTable({products}) {
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
                        <div className="flex flex-row col-span-1 items-center gap-4 overflow-ellipsis truncate">
                            <Avatar rounded="md" size="sm" name={product.title} src={product.pictures[0]} />
                            <div className="flex flex-col">
                                <div className="text-gray-900 font-semibold text-sm">
                                    {product.title}
                                </div>
                                <div className="text-xs text-gray-400 truncate">
                                    {product.owner}
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
                                <ProductsDropdown />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
