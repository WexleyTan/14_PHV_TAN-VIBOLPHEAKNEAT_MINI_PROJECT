import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

const TodoListPage = () => {
  return (
    <div className='w-full flex'>
        <div className='w-[20%]'>
            <SidebarComponent/>
        </div>
        <div className='w-[80%]'>
            <NavbarComponent/>
            <ListBoardComponentHeader/>
        </div>
      
    </div>
  )
}

export default TodoListPage
