import bannerImg1 from "../../../assets/images/banner/1.jpg"
import bannerImg2 from "../../../assets/images/banner/2.jpg"
import bannerImg3 from "../../../assets/images/banner/3.jpg"
import bannerImg4 from "../../../assets/images/banner/4.jpg"
import bannerImg5 from "../../../assets/images/banner/5.jpg"
import bannerImg6 from "../../../assets/images/banner/6.jpg"
const Banner = () => {
    return (
        <>
            <section>
                <div className="carousel w-full h-[90vh]">
                    <div id="item1" className="carousel-item w-full relative">
                        <div className="absolute text-white h-full w-full bg-gradient-to-l from-transparent to-black">
                            <h1 className="text-5xl w-96">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="w-1/2">
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                        </div>
                        <img
                        src={bannerImg1}
                        className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                        src={bannerImg4}
                        className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                        src={bannerImg2}
                        className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                        src={bannerImg3}
                        className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img
                        src={bannerImg5}
                        className="w-full" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img
                        src={bannerImg6}
                        className="w-full" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                    <a href="#item6" className="btn btn-xs">6</a>
                </div>
            </section>
        </>
    );
};

export default Banner;