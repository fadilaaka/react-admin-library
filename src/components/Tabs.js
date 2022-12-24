import React from "react"
import { Link } from "react-router-dom";

const Tabs = () => {
    return(
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="mr-2" role="presentation">
                        <Link to="/jenis">
                        <button className="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Jenis</button>
                            </Link>
                    </li>
                    <li className="mr-2" role="presentation">
                        <Link to="/kategori">
                        <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Kategori</button>
                        </Link>
                    </li>
                </ul>
            </div>
    )
}

export default Tabs;