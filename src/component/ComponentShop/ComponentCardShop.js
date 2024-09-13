import { Link } from 'react-router-dom';

const ComponentCardShop = ({ region, title, intro, pricePerPerson, province, content, images, rate, ord }) => {
    return (
        <Link
            to={{
                pathname: `/product/:${title}`,
                search: `?region=${encodeURIComponent(region)}&title=${encodeURIComponent(title)}&intro=${encodeURIComponent(
                    intro
                )}&price=${encodeURIComponent(pricePerPerson)}&img=${encodeURIComponent(images)}&content=${encodeURIComponent(
                    content
                )}&rate=${encodeURIComponent(rate)}&ord=${encodeURIComponent(ord)}`,
            }}
        >
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                        src={JSON.parse(images)[0]}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                        {rate} ★
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-gray-600">{intro}</p>
                    <div className="mt-4">
                        <div className="text-sm text-gray-500">Price starts from:</div>
                        <div className="text-lg font-bold text-indigo-600">฿{JSON.parse(pricePerPerson)[0].price}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ComponentCardShop;
