import image1 from '../../../assets/qZone1.png'
import image2 from '../../../assets/qZone2.png'
import image3 from '../../../assets/qZone3.png'

const QZon = () => {
    return (
        <div className='mt-5 bg-secondary'>
            <h5>QZon</h5>
            <div className=' mt-3'>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            </div>
           

            
        </div>
    );
};

export default QZon;