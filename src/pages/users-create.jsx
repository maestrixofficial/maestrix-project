import CustomerCreateContent from '@/components/customersCreate/CustomerCreateContent'
import CustomersCreateHeader from '@/components/customersCreate/CustomersCreateHeader'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import React from 'react'

export const UsersCreate = () => {
  return (
    <>
      <PageHeader>
        <CustomersCreateHeader />
      </PageHeader>
      <div className='main-content'>
        <div className='row'>
          <CustomerCreateContent />
        </div>
      </div>
    </>
  )
}
