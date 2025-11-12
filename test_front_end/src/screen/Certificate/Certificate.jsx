import React from 'react';
import { NavigationMenuSection } from './sections/NavigationMenuSection/NavigationMenuSection';
import { CertificateStatsSection } from './sections/CertificateStatsSection';
import { CertificateSearchSection } from './sections/CertificateSearchSection';
import { CertificateListSection } from './sections/CertificateListSection/CertificateListSection';
import { HeaderSection } from './sections/HeaderSection/HeaderSection'; 
const drawerWidth = 50;
export const Certificate = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* 👇 THÊM "shrink-0" VÀO ĐÂY */}
      <div className="shrink-0 w-[50px] p-10 mr-4">
        <nav className = ""> 
        <NavigationMenuSection drawerWidth={drawerWidth} />
        </nav>
      </div>

      {/* Phần còn lại của layout giữ nguyên */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        <HeaderSection /> 

        <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {/* Bạn có thể xóa "text-red-500" nếu không cần test nữa */}
          <h2 className="text-2xl font-bold mb-4">Certificate Management</h2>
          <CertificateListSection />
          <CertificateSearchSection/>
          <CertificateStatsSection />
          
        </div>
      </main>
    </div>
  );
};