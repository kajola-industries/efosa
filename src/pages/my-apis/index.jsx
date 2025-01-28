import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import SBreadcrumbs from "@/components/SBreadcrumbs";
import STabs from "@/components/STabs";
import PlusIcon from "@assets/icons/plusIcon.svg?react";
import { GeneralContext } from "@contexts/GeneralContext.jsx";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiCards from "./ApiCards";
import PublicApis from "./PUBLICApisDumyData.json";

export default function MyApis() {
  const { myAPIs } = useContext(GeneralContext);

  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState("My APIs");
  const getSelectedtab = (value) => {
    setSelectedTab(value);
  };

  const filteredAPIs = useMemo(() => {
    let list = [];
    if (searchText === "") {
      list = [...myAPIs];
    } else {
      list = [
        ...myAPIs.filter((myApi) => {
          const { API = {} } = myApi;
          return API.name?.toLowerCase().includes(searchText.toLowerCase());
        }),
      ];
    }

    return list;
  }, [searchText, myAPIs]);

  return (
    <div className="w-full h-screen flex flex-col pl-8 px-10 p-8">
      <SBreadcrumbs />
      <div className="w-full flex items-center mt-10">
        <STabs
          getSelectedTab={getSelectedtab}
          childWithSibling="flex"
          tabListSibling={
            <div className="w-1/2 flex flex-col gap-2">
              <span className="text-[28px] font-medium leading-larger">
                {selectedTab}
              </span>
              <span className="w-full max-w-[585px] text-base font-normal text-grey-17 font-['Inter'] tracking-wide">
                Here you can see all the APIs you've integrated into your
                projects. Feel free to upload any new API you'd like to use.
              </span>
            </div>
          }
          tabStyles={{
            tabContent: "!p-0 !w-full flex flex-col gap-6",
            tabChild: "justify-between items-center",
            tabListStyle:
              "flex w-[200px] bg-grey-15 px-2 py-0 h-11 text-grey-17 rounded-3xl items-center mr-5",
            activeTab: "!bg-grey-15 border !rounded-3xl",
          }}
          tabs={[
            {
              name: "My APIs",
              children: <ApiCards filteredAPIs={filteredAPIs} />,
            },
            {
              name: "Public APIs",
              children: <ApiCards isPublic filteredAPIs={PublicApis} />,
            },
          ]}
        />
      </div>
      <div className="flex  justify-center items-center mt-auto">
        <div className="bg-grey-19 w-64 flex flex-row items-center px-2 rounded-2xl">
          <CustomInput
            variant="searchBox"
            className="w-1/2"
            inputClassName="w-full border-0"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            className="w-1/2 gap-2 bg-grey-19"
            variant="addAuth"
            onClick={() => navigate(`/my-apis/add-api`)}
          >
            <PlusIcon />
            <span className="text-md">New API</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
