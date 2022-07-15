import React, { useEffect, useState } from 'react';
import { Network, Urls, config } from '../../config';
import TableLayout from './Table/TableLayout';
import Loader from '../../assets/animations';
import { toast } from 'react-toastify';

const HeaderData = ['name', 'email', 'action'];
export default function RequestTable() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getRequests();
    }, []);

    const handleApprove = async (id) => {
        console.log('upadte', id);
        const data = requests.filter((request) => request._id !== id);
        setRequests(data);
        const response = await Network.put(Urls.approveRequest + id,{ },(await config()).headers);
       if (!response.ok) {
            return toast.error(response.data.error, { position: 'top-right' });
        }

        toast.success(response.data.message, {
            position: 'top-right',
        });
        
    };

    const deleteRequest = async (id) => {
         const data = requests.filter((request) => request.shopId!== id);
        const response = await Network.delete(
            Urls.deleteRequest + id,
            {},
            (
                await config()
            ).headers
        );
        if (!response.ok) {
            return toast.error(response.data.error, { position: 'top-right' });
        }

        toast.success(response.data, {
            position: 'top-right',
        });
         setRequests(data);
    };
    const getRequests = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getRequests, (await config()).headers);
        setRequests(response.data.updateRequests);
        setLoading(false);
    };
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <TableLayout
                    HeaderData={HeaderData}
                    BodyData={requests}
                    handleApprove={handleApprove}
                    deleteRequest={deleteRequest}
                />
            )}
        </>
    );
}
