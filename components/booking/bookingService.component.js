import { useEffect } from 'react';
import Select from 'react-select';
import styles from '../../assets/styles/main.module.scss';

const BookingService = ({ services, quantities, bookingService, updateService, updateQuantity, updateServiceDetails }) => {
    const { service, serviceDetails } = bookingService;
    const serviceDetailOptions = service?.serviceDetails?.map((item) =>{
        return {
            label: item.name,
            value: item.id,
        }
    })

    useEffect(() => {
        updateServiceDetails([]);
    }, [service])

    const onServiceSelected = (event) => {
        let index = event.target.value;
        updateService(services[index]);
    }

    const onServiceDetailsChange = (value) => {
        updateServiceDetails(value);
    }

    const onQuantitiesChange = (event) => {
        updateQuantity(event.target.value);
    }

    return <div className={styles.row}>
        <select className={styles.text_box + ' ' + styles.service_text_box} onChange={onServiceSelected} >
            <option value="" selected disabled hidden>Services</option>
            {
                services.map((service, index) => {
                    return <option key={service.id} value={index}>
                        {service.name}
                    </option>
                })
            }
        </select>

        <select className={styles.text_box + ' ' + styles.quantity_text_box} onChange={onQuantitiesChange}>
            <option value="" selected disabled hidden>Quantity</option>
            {
                quantities.map((item, index) => {
                    return <option value={item} key={index}>
                        {item}
                    </option>
                })
            }
        </select>

        {service?.serviceDetails?.length
            ? <Select
                isMulti={true}
                className={styles.text_box + ' ' + styles.service_detail_text_box}
                options={serviceDetailOptions}
                value={serviceDetails}
                onChange={onServiceDetailsChange} />
            : null
        }
    </div>

}

export default BookingService;