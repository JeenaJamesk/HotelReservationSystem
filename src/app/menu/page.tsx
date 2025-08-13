
import Image from "next/image";
import MenuSection from "../../components/MenuSection";

// Menu data
const salads = [
    { name: "Green Salad (Vegetables) – V", price: "£3.99" },
    { name: "Raw Mango salad", price: "£4.99", description: "(A combination of mango and pineapple with a tangy vinegar dressing) – V" },
];

const soups = [
    { name: "Hot & Sour soup (Chicken, Egg, Veg)", price: "£4.99", description: "(A spicy hot soup finished with a hint of white pepper) – G, E, S, C" },
    { name: "Sweet Corn Soup (Chicken, Egg, Veg)", price: "£4.99", description: "(A smooth and creamy soup made with sweetcorn) – G, E, C" },
];

const starters = [
    { name: "Chicken Dosa Tacos", price: "£4.99", description: "Crispy mini dosas folded filled with chicken, lettuce and a special sauce. A South Indian twist on a taco favorite – G, E" },
    { name: "Chicken Lollipop", price: "£5.99", description: "A popular Indo-Chinese appetiser where frenched chicken drumettes are marinated and then batter-fried, cooked in sweet chili sauce – G" },
    { name: "Chicken 65", price: "£6.99", description: "Small pieces of deep-fried tender chicken – G" },
    { name: "Chilly Chicken Dry", price: "£7.99", description: "Sweet and spicy chicken, Pan-cooked with onions and peppers – C, G, S" },
    { name: "Chicken Manchurian Dry", price: "£7.99", description: "Diced chicken cooked in a thick sauce with chilly and garlic – C, G, S" },
    { name: "Chicken with pepper", price: "£6.99", description: "Fried chicken strips cooked in coconut milk – G" },
    { name: "Aalappeaz Special Chicken Kondattam", price: "£7.99", description: "Chicken cubes marinated in a spicy mixture, deep-fried and sautéed in masala – G" },
];

export default function MenuPage() {
    return (
        <div className="bg-[#005b66] text-white min-h-screen px-10 py-12 font-sans">
            <div className="grid grid-cols-2 gap-[2%] mx-[2%]">
                <div>
                    <MenuSection
                        title="Salads"
                        items={salads}
                        imageSrc="/images/salad.png"
                        imageAlt="Cucumber Salad"
                    />
                    <MenuSection
                        title="Soup"
                        items={soups}
                    />
                    <div className="flex justify-center my-6">
                        <Image
                            src="/images/dosa.png"
                            alt="Dosa"
                            width={300}
                            height={300}
                            className="rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                </div>
                <div>
                    <MenuSection
                        title="Starters"
                        items={starters}
                    />
                    <div className="mt-10 flex justify-center">
                        <Image
                            src="/images/lollipop.png"
                            alt="Chicken Lollipop"
                            width={400}
                            height={200}
                            className="rounded-[20px] border-2 border-white"
                        />
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-300 mt-10 mx-[2%] p-[2%]">
                Please inform staff of any allergies. Some dishes may contain nuts, dairy, gluten, or other allergens.
                V – veg, G – gluten, E – egg, S – soya, C – celery, D – dairy (milk), CR – crustaceans, N – nuts
            </p>
        </div>
    );
}
