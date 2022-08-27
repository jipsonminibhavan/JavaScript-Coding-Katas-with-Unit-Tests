function filterApiData(apiData, mandatoryKeys) {

  /*The first parameter apiData will be an array that includes objects
     -The objects can have different keys
     -The second parameter mandatoryKeys is a array that includes all keys that an object (from the apiData array) should have to pass the filter test
      -Return an array with only the objects that include all keys from the mandatoryKeys array*/


      const result = apiData.filter((data) => 
      Object.fromEntries(Object.entries(data).filter(([key]) => mandatoryKeys.includes(key) 
      )
      )
      );
      return result;
}