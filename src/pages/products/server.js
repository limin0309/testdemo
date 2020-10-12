import request from '../../utils/request';
import { stringify } from 'qs';

// 获取批售包信息
export function querybatchpackageinfo() {
  return request('/car-audit-api/vehicle/batchvehicle/querybatchpackageinfo');
}
// 上架/重新上架
export function vehicleonsale(params) {
  return request(`/car-audit-api/vehicle/batchvehicle/vehicleonsale`, {
    method: 'post',
    body: JSON.stringify(params),
  });
}

// 销售方式
export function getBsaletype() {
  return request('/car-audit-api/ydg/vehicle/enum/bsaletype');
}

// 销售状态
export function getSalestatus() {
  return request('/car-audit-api/ydg/vehicle/enum/salestatus');
}

// 所在城市
export function getCity() {
  return request('/car-audit-api/ydg/vehicle/enum/city');
}

// 检测报告
export function getDetection() {
  return request('/car-audit-api/ydg/vehicle/enum/detection');
}

// 批售包名
export function getPackageName() {
  return request('/car-audit-api/ydg/vehicle/enum/package');
}

// 批售列表
export function getVehiclelist(params) {
  return request(`/car-audit-api/batch/sale/vehiclelist?${stringify(params)}`);
}
// 导入
export function portImport(file) {
  return request(`/car-audit-api/batch/sale/import`, {
    method: 'post',
    body: { file },
  });
}

// 批量上架/停售
export function batchupdatestatus(body) {
  return request(`/car-audit-api/vehicle/batchvehicle/batchupdatestatus`, {
    method: 'post',
    body: JSON.stringify(body),
  });
}

// 调价
export function updateprice(body) {
  return request(`/car-audit-api/vehicle/batchvehicle/updateprice`, {
    method: 'post',
    body: JSON.stringify(body),
  });
}

// 成交
export function vehicletransaction(body) {
  return request(`/car-audit-api/vehicle/batchvehicle/vehicletransaction`, {
    method: 'post',
    body: JSON.stringify(body),
  });
}

// 批量成交
export function batchSaleTransacts(body) {
  return request(`/car-audit-api/batch/sale/transacts`, {
    method: 'post',
    body: JSON.stringify(body),
  });
}

// 导出
export function fetchExport(params) {
  return `${window.location.origin}/car-audit-api/batch/sale/export?${stringify(
    params,
  )}`;
}
