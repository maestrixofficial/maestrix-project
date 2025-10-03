import CustomersHeader from '@/components/customers/CustomersHeader'
import CustomersTable from '@/components/customers/CustomersTable'
import Footer from '@/components/shared/Footer'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import React from 'react'

export const UsersList= ()=> {
  return (
    <>
      <PageHeader>
        <CustomersHeader />
      </PageHeader>
      <div className='main-content'>
        <div className='row'>
          <CustomersTable />
        </div>
      </div>
      <Footer/>
    </>
  )
}
