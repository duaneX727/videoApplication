import _ from 'lodash'

export function paginate(items,pageNumber,pageSize){
  // Page number
  // Page size
  // Items
  // 1. Calculate the starting index on pageNumber
  const startIndex = (pageNumber - 1) * pageSize;
  // 2. Create a lodash wrapper
  // 3. chain the lodah methods
  // 4. convert lodash wrapper to a regular array
  //_.slice(items,startIndex)
  return _(items)
                .slice(startIndex)
                .take(pageSize)
                .value();
} 

