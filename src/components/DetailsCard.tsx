import React from 'react';
import Collapsible from 'react-collapsible';
import {toCapitalize} from "../utils/helpers";
import {Card, Divider, Flex, H2,} from '../utils/styles';

interface DetailCard {
    collapsable?: boolean;
    title: string,
    data: string | any
};

const DetailsCard: React.FC<DetailCard>  = ({collapsable, title, data}: DetailCard) => {
    return (
        <Card>
            {collapsable ?
                <Collapsible trigger={<H2>{toCapitalize(title)}s</H2>}>
                    <Divider/>
                    {data.map((item: any) =>
                        <div key={item[title].name}>
                            {item[title].name}
                        </div>
                    )}
                </Collapsible> :
                <Flex>
                    <h3>{title}</h3>
                    <span>{data}</span>
                </Flex>
            }
        </Card>
    );
};

export default DetailsCard;