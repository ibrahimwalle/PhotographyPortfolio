
import React from 'react';
import { useQuery } from 'react-query';
import { listOfGroups, groupInfo } from '@uploadcare/rest-client';
import { uploadcareSimpleAuthSchema } from '../utils/uploadcare_config';

import Fancybox from './fancybox';
import Gallery from './gallery';

const PortfolioComponent: React.FC = () => {

    const fetchData = async () => {
        let images: any = [];
        const grouplist = await listOfGroups({}, { authSchema: uploadcareSimpleAuthSchema });
        // use group ids to fetch images and populate sets dynamically based on the number of groups
        const groupIds = grouplist.results.map((group) => group.id);
        for (const id of groupIds) {
            const group = await groupInfo({uuid: id}, { authSchema: uploadcareSimpleAuthSchema });
            const imageIDs = group.files.map((file) => `https://ucarecdn.com/${file.uuid}/-/preview/1016x1016/`);
            // images is an array of arrays of image uuids
            images.push(imageIDs);
        }  
        console.log(images);
        return images;
    }

    const { data  , isLoading, isError } = useQuery('data', fetchData);

    return (
        <div className="container mx-auto w-full">
            <h1 className="text-3xl pt-10 pb-8 font-bold text-left">PORTFOLIO</h1>
            <section className="text-neutral-700">
                <div className="container w-full">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-t-slate-300 border-b-slate-400"></div>
                        </div>
                        ) : isError ? (
                            <div>Error Fetching images!</div>
                        ) : 
                        <Fancybox options={{ Carousel: { infinite: false }}}>
                            {data?.map((imageSet: any, index: any) => (
                                (index % 2 != 0) ?  <Gallery images={imageSet} alternate={true}/> : <Gallery images={imageSet} />
                            ))}
                        </Fancybox>
                    }
                </div>
            </section>
        </div>
    );
};

export default PortfolioComponent;
