import { useState } from "preact/hooks";
import ManaCalc from "./ManaCalc.tsx";
import LandCount from "./LandCount.tsx";
import { Signal } from "@preact/signals";
import ManaSources from "./ManaSources.tsx";

export type ManaCalcTabsProps = {
    tabNum: Signal<number>;
};

const tabInfo = [
    {
        id: 1,
        label: "Fleck Mana Calc"
    },
    {
        id: 2,
        label: "Karsden Land Calc"
    },
    {
        id: 3,
        label: "Karsden Mana Sources"
    }

]

export default function ManaCalcTabs() {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    const colorClass = (id: number) => {
        const result = id == selectedTab ? "bg-green-900" : "bg-green-600";
        console.log(id, selectedTab, id === selectedTab, result);
        return result;
    }
    return (<div className="border-2 border-black border-solid m-0 p-0">
        <div className={`tabstrip bg-green-500`}>
            <div className="top flex text-gray-100 rounded-t-md overflow-hidden">
                <div className="buttons ml-auto my-auto flex">
                    {tabInfo.map((tab) => (
                        <button 
                            onClick={(e) => setSelectedTab((e.target as HTMLButtonElement).dataset.tab as any)} 
                            data-tab={tab.id} 
                            className={`btn ${colorClass(tab.id)} cursor-pointer p-2 px-3`}>{tab.label}</button>
                    ))}
                </div>
            </div>
        </div>
        { selectedTab == 1 ? (
            (<ManaCalc />)
        ) : selectedTab == 2 ? 
            (<LandCount />
        ): selectedTab == 3 ? 
            (<ManaSources />) : null}
    </div>);
}