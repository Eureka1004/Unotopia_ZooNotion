import React from "react";
import '../style.css';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <div className="flex-1 p-8">
        <table className="w-full border-collapse bg-white shadow-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 border bg-gray-100 text-left">Nama</th>
              <th className="px-4 py-2 border bg-gray-100 text-left">Role</th>
              <th className="px-4 py-2 border bg-gray-100 text-left">ID</th>
              <th className="px-4 py-2 border bg-gray-100 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Asep Yudistira</td>
              <td className="px-4 py-2 border">Manager</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Aldolf Hitler</td>
              <td className="px-4 py-2 border">Marketing</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Shawn Mendes</td>
              <td className="px-4 py-2 border">Maintenance</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Juliana Winata</td>
              <td className="px-4 py-2 border">Marketing</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Michael Owen</td>
              <td className="px-4 py-2 border">Desainer</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Anastasia Adeline</td>
              <td className="px-4 py-2 border">Web Development</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Cristiano Ronaldo</td>
              <td className="px-4 py-2 border">Desainer</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Albert Einstein</td>
              <td className="px-4 py-2 border">Marketing</td>
              <td className="px-4 py-2 border">22051214029</td>
              <td className="px-4 py-2 border">Aktif</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex space-x-2 text-gray-700">
          <span className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">&lt;</span>
          <span className="px-3 py-1 rounded bg-green-600 text-white font-bold">1</span>
          <span className="px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">2</span>
          <span className="px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">3</span>
          <span className="px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">4</span>
          <span className="px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">&gt;</span>
        </div>
      </div>
    </div>
  );
}