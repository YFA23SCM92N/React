import { useEffect, useState } from "react";
import Question from "./Question";

const Help = () => {

    const source = ["https://www.swiggy.com/dapi/support/issues/partner-onboarding", 
                    "https://www.swiggy.com/dapi/support/issues/legal", 
                    "https://www.swiggy.com/dapi/support/issues/faq"]

    const [onBoardingData, setOnBoardingData] = useState(null);

    const [showIndex, setShowIndex] = useState(null)

    const [index, setIndex] = useState(0)

    // const [url, setUrl] = useState(source[0])

    const handleClick = (index) => {
        setIndex(index)
    }

    useEffect(() => {
        fetchData()
    }, [index]);

    async function fetchData() {
        const data = await fetch(source[index])
        const json = await data.json();

        const questions = json?.data?.issues?.data

        setOnBoardingData(questions)

        // console.log(questions)
    }


    return (
        <div className="flex m-24 p-4 border border-gray-200">
            <div className="flex flex-col border bg-slate-200 min-h-8">
                <span className={`px-5 py-5 cursor-pointer ${index === 0 ? 'bg-white' : ''}`} onClick={() => handleClick(0)}>PartnerOnboarding</span>
                <span className={`px-5 py-5 cursor-pointer ${index === 1 ? 'bg-white' : ''}`} onClick={() => handleClick(1)}>Legal</span>
                <span className={`px-5 py-5 cursor-pointer ${index === 2 ? 'bg-white' : ''}`} onClick={() => handleClick(2)}>FAQ's</span>
            </div>
            

            {onBoardingData != null 
                ? 
                    (
                        <div className="mx-4 w-4/5">
                            {onBoardingData.map((pair, index) => 
                                <Question 
                                    key = {pair.id}
                                    title = {pair.title}
                                    description = {pair.description}
                                    showItem={index == showIndex ? true : false}
                                    setShowIndex = {() =>
                                        setShowIndex(index === showIndex ? null : index)
                                    }
                                />
                            )}
                        </div>
                    ) 
                :
                    (
                        <div className="m-4 p-4">
                            Loading.....
                        </div>
                    )
            }
                
            
        </div>
    )
}

export default Help;