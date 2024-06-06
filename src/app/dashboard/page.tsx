import Count from "@/components/Count";

export default function DashboardPage() {
    const img = "school.png"
  return (
    <>
    <div className="flex justify-around">
        <Count icon={img} entity={"Students"} total={100}/>
        <Count icon={img} entity={"Teachers"} total={100}/>
        <Count icon={img} entity={"Classes"} total={100}/>
        <Count icon={img} entity={"Students"} total={100}/>
    </div>
    </>
  );
}
