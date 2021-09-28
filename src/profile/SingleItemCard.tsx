import React, { FC } from "react";
import '../styles/ProfileStyle.css';
import { SWLabelValue } from "./SWLabelValue";
import { ItemDisplayQuery_displayItems } from "./__generated__/ItemDisplayQuery";
// import {ItemDisplayShopQuery_displayShopItems} from '../shop/__generated__/ItemDisplayShopQuery';

const SingleItemCard: FC<{ item: ItemDisplayQuery_displayItems }> = ({ children, item }) => {
    return (
        <div className="rounded p-3 bg-purple-600 shadow flex flex-col gap-3">
            <SWLabelValue label="Name:" value={item.PartName!.name}></SWLabelValue>
            <SWLabelValue label="Price:" value={'' + item.price}></SWLabelValue>
            <SWLabelValue label="Part:" value={item.SaberPart!.name}></SWLabelValue>
            <SWLabelValue label="Description:" value={item.partDescription}></SWLabelValue>
            <div className="self-start">
                {children}
            </div>
        </div>
    );
};
export default SingleItemCard;