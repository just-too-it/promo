import { PrizeProps } from "components/Prizes/Prize.types";
import scooter from 'assets/images/scooter.png'
import alisa from 'assets/images/alisa.png'
import watch from 'assets/images/watch.png'

export const prizesItems: PrizeProps[] = [
    {
        id: 1,
        image: scooter,
        name: 'Электросамокат'
    },
    {
        id: 2,
        image: alisa,
        name: 'Колонка'
    },
    {
        id: 3,
        image: watch,
        name: 'Смарт часы'
    }
]