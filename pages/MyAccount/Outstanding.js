import {Text, FlatList} from 'react-native'
import { MoneyCard } from '../../components/account/MoneyCard'

export const Outstanding =()=>{

    const data = [
        {id:1,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:2,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:3,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:4,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:5,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:6,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        {id:7,name: 'Annual National Due ', date:'12/02/2022', amount:150000},
        
        ]

    return(
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <MoneyCard
                reason={item.name}
                amount={item.amount}
                date={item.date}
                type='outstanding'
            />
                )}
        />
    )
}