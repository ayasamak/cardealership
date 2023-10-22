I solved the problem by creating two components
 Lead component	
         To view the leads, when I click the view button, the lead ID of that lead is sent using RouterLink and then it goes to the duplicate component.

Potential duplicate component		
          I take the id from the path link using the activated path to get a Potential  duplicate of this lead
          (using GET /api/leads/:lead_id/potential-duplicates)

          -If returning data, I take each ID returned to display the object it belongs to using the filter function (to return the full lead object)..

          - Otherwise the message “No possible repeat of the display” appears.

          Using *ngIf else

-Sales staff can mark one or more “potential duplicates”
When one is marked (updating this object of a lead) 
appear alert by using sweetalert2  

handel error by using error interceptor
