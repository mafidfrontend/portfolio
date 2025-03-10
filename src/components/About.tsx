import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div
                    className="col-span-2"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <p className="uppercase text-xl tracking-widest text-primary">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600 text-lg">
                        Men, Abdulloh, tajribali frontend dasturchi va ta’lim
                        sohasida faoliyat yurituvchi mutaxassisman. Hozirda
                        Najot Ta’lim o‘quv markazida tahsil olib, frontend
                        yo‘nalishida yordamchi o‘qituvchi sifatida ishlayman.
                        Dasturlash sohasiga bo‘lgan qiziqishim meni Mafid
                        Frontend nomli Telegram kanalini yaratishga undadi, bu
                        platforma orqali o‘z tajribam va bilimlarimni
                        dasturlashga qiziquvchilar bilan bo‘lishib boraman.
                        Bundan tashqari, foydalanuvchilar uchun qulay va
                        innovatsion yechimlarni taqdim etuvchi Mafid nomli web
                        loyiham ustida ishlayapman. Mening asosiy maqsadim –
                        zamonaviy va samarali veb-ilovalarni yaratish hamda
                        bilim almashish orqali IT sohasining rivojlanishiga
                        hissa qo‘shishdir.
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image
                            src="/public/assets/about.jpeg"
                            className="rounded-xl "
                            alt="/"
                            height={800}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
