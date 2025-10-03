import CustomerContent from '@/components/customersView/CustomerContent'
import CustomersViewHeader from '@/components/customersView/CustomersViewHeader'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import React from 'react'

export const UsersView = () => {
  return (
    <>
      <PageHeader>
        <CustomersViewHeader />
      </PageHeader>
      <div className='main-content'>
        <div className='row'>
          <CustomerContent />
        </div>
      </div>
    </>
  )
}
