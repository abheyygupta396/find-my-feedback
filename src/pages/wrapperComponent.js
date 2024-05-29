import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/progressBar";
import SearchBar from "../components/Common/SearchBar";
import Header from "../components/Common/Header";
import SpecificDateCalendar from "../components/specificDateCalendar";
import Chats from "../components/usersList";
import ListUserComponent from "../components/usersList";

function WrapperComponent() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress} />
      ) : (
        <div className="w-screen overflow-hidden h-[calc(100%-60px)] ">
          <Header />
          <div className="flex pt-[60px]">
            <div className="flex flex-col gap-y-5 min-w-[240px] max-w-[400px] w-full border-r border-custom-color px-10 py-6 bg-[#F1F2F3]">
              <SearchBar />
              <div className="flex flex-col w-100 h-screen">
                <ListUserComponent />
              </div>
            </div>
            <div className="min-w-[415px] w-full bg-[#F1F2F3] pt-10">
              <SpecificDateCalendar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WrapperComponent;
