import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <main className=" flex flex-col gap-24">
            <section className="options container">
                <div className="flex flex-col gap-24 w-full">
                    <h2 className="font-medium text-50px leading-59.25px text-left">ОПЦИИ СЕРВИСА</h2>
                    <div className="flex flex-row gap-7">
                        <div className="flex flex-col gap-7 flex-1">
                            <div className="flex flex-row gap-7 min-w-80">
                                <p className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl h-full">Сдать
                                    текущий квартал</p>
                                <div className="flex flex-col gap-7">
                                    <p className="flex items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">Сдать
                                        уточненку</p>
                                    <p className="p-11 flex items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">Блокировка
                                        счета 115 ФЗ</p>
                                </div>
                            </div>
                            <p className="flex items-center justify-center h-24 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">Вызвать
                                в ФНС юридическое сопровождение</p>
                        </div>
                        <div className="flex flex-col gap-7 flex-1">
                            <div className="flex flex-row gap-7">
                                <div className="flex flex-col gap-7 min-w-80">
                                    <p className="flex pr-9 pl-9 items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">Заказать
                                        аналитику
                                        по модели ФНС</p>
                                    <p className="flex pr-9 pl-9 items-center justify-center h-28 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">Подключить
                                        умную
                                        бухгалтерию</p>
                                </div>
                                <p className="flex pl-6 pr-14 pb-8 items-end p-32px pt-32px pb-33px pl-24px pr-31px bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl h-full">Мониторинг
                                    по
                                    модели ФНС.
                                    Детализация
                                    разрывов</p>
                            </div>
                            <p className=" flex items-center justify-center h-24 bg-gray-100 font-medium text-23px leading-27.26px rounded-2xl">Проверка
                                контрагента по критериям ЦБ</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services container">
                <div className="flex flex-col gap-24 w-full">
                    <h2 className="font-medium text-50px leading-59.25px text-left">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
                    <div className="flex flex-row flex-wrap gap-5">
                        <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
                            <img className="mx-14" src="/consulting.svg" alt="tax consulting"/>
                            <p className="text-customGray font-medium text-28px leading-33.18px text-center">НАЛОГОВЫЙ КОНСАЛТИНГ</p>
                        </div>
                        <img src="/arrow.svg" alt="arrow"/>
                        <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
                            <img className="mx-14" src='/case.svg' alt="rehabilitation means 155 federal law"/>
                            <p className="text-customGray font-medium text-28px leading-33.18px text-center">РЕАБИЛИТАЦИЯ СРЕДСТВ 115 ФЗ</p>
                        </div>
                        <img src="/arrow.svg" alt="arrow"/>
                        <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
                            <img className="mx-14" src="/control.svg" alt="examination contractors"/>
                            <p className="text-customGray font-medium text-28px leading-33.18px text-center">ПРОВЕРКА КОНТР. АГЕНТОВ</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-users max-w-[1178px] mx-auto">
                <div className="flex flex-col gap-16 w-full align-center">
                    <div className="px-11 py-6 flex flex-row gap-9 align-center rounded-3xl  max-w-[981px] shadow-lg">
                        <div className="pr-9 border-r-4 border-r-customBlue">
                            <img className="object-contain h-18 w-20" src="/users.svg" alt="users"/>
                        </div>
                        <h2 className="font-medium text-3xl my-auto leading-59.25px">ВЫ НОВЫЙ ПОЛЬЗОВАТЕЛЬ?</h2>
                    </div>
                    <div className="flex flex-row gap-9">
                        <h3 className="font-medium text-2xl uppercase leading-33.18px">Попробуйте <span className="text-customBlue">бесплатно</span> проверить <span className="text-customBlue">2 компании</span></h3>
                        <img  className="object-contain h-8 w-8" src="/arrowDown.svg" alt="arrow down"/>
                    </div>
                    <div className="flex flex-col gap-10 max-w-[1178px] py-9 px-11 rounded-[24px] bg-custom-gradient">
                        <h2 className="font-medium text-5xl leading-[88.25px] text-white">ПРОВЕРИТЬ ПРЯМО СЕЙЧАС</h2>
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-row gap-14 items-center">
                                <form className="flex flex-row gap-9 shadow-lg bg-white py-5 px-8 flex-1 rounded-2xl h-24 items-center">
                                    <label for="inn" className="font-medium text-2xl uppercase leading-33.18px text-customGreyTwo max-w-[210px]">ВВЕДИТЕ ИНН КОМПАНИИ</label>
                                    <input name="inn" id="inn" type="number" minLength="10" maxLength="10" pattern="[0-9]{10}" className="max-w-[366px] h-10 outline-none rounded border-2 border-solid  border-customBorderGrey font-medium text-2xl uppercase leading-33.18px text-customGreyTwo "/>
                                </form>
                                <button className="text-white bg-customBlue px-9 rounded-xl font-medium text-2xl uppercase leading-33.18px h-16" type="submit">ПРОВЕРИТЬ</button>
                            </div>
                            <p className="font-regular text-lg text-white max-w-[598px] text-center">Уникальный сервис налоговой аналитики и проверки
                                на типологические списки ЦБ</p>
                        </div>
                    </div>
                    <div className="flex flex-row max-w-[794px] h-32">
                        <div className="flex flex-col max-w-[641px]">
                            <p className="font-regular text-xl leading-33.18px">Купить ежемесячную подписку и проверять <br /> больше компаний</p>
                            <a href="#" className="flex flex-row  items-center gap-3.5 rounded-xl bg-customBlue w-44 h-16 py-3 px-4 ml-auto mr-2.5 shadow-lg">
                                <p className="text-white font-medium text-base">ТЕЛЕГРАММ @NDS4B</p>
                                <img className="object-containw-8 h-8" src="/telegram.svg" alt="telegam" />
                            </a>
                        </div>
                        <img  className="object-contain w-28 h-auto" src="/arrowСrooked.svg" alt="arrow" />
                    </div>

                </div>
            </section>
        </main>
    );
}

