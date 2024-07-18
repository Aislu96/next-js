export default function Home() {
    return (
        <main className="container flex flex-col gap-24">
            <section className="options">
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
            <section className="services">
                <div className="flex flex-col gap-24 w-full">
                    <h2 className="font-medium text-50px leading-59.25px text-left">ОПЦИИ СЕРВИСА</h2>
                    <div className="flex flex-row flex-wrap gap-5">
                        <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
                            <img className="mx-14" src="/services/consulting.svg" alt="tax consulting"/>
                            <p className="text-customGray font-medium text-28px leading-33.18px text-center">НАЛОГОВЫЙ КОНСАЛТИНГ</p>
                        </div>
                        <img src="/services/arrow.svg" alt="arrow"/>
                        <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
                            <img className="mx-14" src='/services/case.svg' alt="rehabilitation means 155 federal law"/>
                            <p className="text-customGray font-medium text-28px leading-33.18px text-center">РЕАБИЛИТАЦИЯ СРЕДСТВ 115 ФЗ</p>
                        </div>
                        <img src="/services/arrow.svg" alt="arrow"/>
                        <div className="flex flex-col gap-4 bg-gray-100 h-[328px] w-[328px] p-10 rounded-[50px] shadow-custom">
                            <img className="mx-14" src="/services/control.svg" alt="examination contractors"/>
                            <p className="text-customGray font-medium text-28px leading-33.18px text-center">ПРОВЕРКА КОНТР. АГЕНТОВ</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-users">
                <div className="flex flex-col gap-24 w-full align-center">
                    <div className="px-11 py-6 flex flex-row gap-9 align-center shadow-customTwo">
                        <div className="pr-9 border-r-4 border-r-customBlue">
                            <img src="/new-users/users.svg" alt="users"/>
                        </div>
                        <h2 className="font-medium text-50px leading-59.25px">ВЫ НОВЫЙ ПОЛЬЗОВАТЕЛЬ?</h2>
                    </div>
                </div>
            </section>
        </main>
    );
}

