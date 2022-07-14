import React,{useEffect,useState} from 'react'
import TableLayout from './Table/TableLayout';
import { Network, Urls, config } from '../../config'
import Loader from '../../assets/animations';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import i18next from 'i18next';


export default function OrderPage() {
  const HeaderData = ['order-id', 'product-name','quantity','status','action'];
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { t } = useTranslation();

    useEffect(()=>{
      getOrders();
    },[])

  const getOrders = async (page) => {
    setLoading(true);
    const response = await Network.get(
        Urls.getOrders(i18next.language) + `?page=${page}&limit=10`,
        (
            await config()
        ).headers
    );
    setOrders(response.data.orders);
    setTotalPages(response.data.totalpages);
    setLoading(false);
    }
    
  return (
      <div>
          <h1>{t('Orders') }</h1>
          {loading ? (
              <Loader />
          ) : (
              <>
                  <TableLayout HeaderData={HeaderData} BodyData={orders} />
                  {page < totalPages && (
                      <Button
                          onClick={() => {
                              getOrders(page + 1);
                              setPage(page + 1);
                          }}
                      >
                          {t('more')}
                      </Button>
                  )}
              </>
          )}
      </div>
  );
}
