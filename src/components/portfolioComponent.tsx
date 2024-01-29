
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
            const imageIDs = group.files.map((file) => `https://ucarecdn.com/${file.uuid}/-/preview/`);
            // images is an array of arrays of image uuids
            images.push(imageIDs);
        }  
        console.log(images);
        return images;
    }

    const { data  , isLoading, isError, refetch } = useQuery('data', fetchData);


    const set1 = [
        'https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80',
        'https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
    ];
    const set2 = [
        'https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80',
    ];


    return (
        <div className="container mx-auto w-full">
            <h1 className="text-3xl pt-10 pb-8 font-bold text-left">PORTFOLIO</h1>
            <section className="text-neutral-700">
                <div className="container w-full">
                    <Fancybox
                        options={{
                        Carousel: {
                            infinite: false,
                        },
                        }}>
                        <Gallery images={set1} />
                        <Gallery images={set2} alternate={true}/>
                        {/* {data} */}
                        {data?.map((imageSet: any) => (
                            <Gallery images={imageSet} />
                        ))}
                    </Fancybox>
                </div>
            </section>
        </div>
    );
};

export default PortfolioComponent;
