import React from 'react'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom';

export default function ({id,name,category,link}) {
  return (
      <>
          <tr>
              <th scope='row'>{id}</th>
              <td>{name}</td>
              <td>{category}</td>
              <td>
                  <Link to={link+'/edit'}>
                      <Button
                          color='success'
                          onClick={() => {
                              console.log(id);
                          }}
                      >
                          Edit
                      </Button>
                  </Link>{' '}
                  <Button
                      color='danger'
                      onClick={() => {
                          console.log(id);
                      }}
                  >
                      Delete
                  </Button>
              </td>
          </tr>
      </>
  );
}
