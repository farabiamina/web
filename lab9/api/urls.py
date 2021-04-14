from api.views import show_vacancy, show_vacancy_list, show_company_list, show_company, show_top_ten_vacancies
from django.urls import path


urlpatterns = [
    path('companies/', show_company_list),
    path('companies/<int:company_id>/', show_company),
    path('vacancies/', show_vacancy_list),
    path('vacancies/<int:vacancy_id>', show_vacancy),
    path('vacancies/top_ten', show_top_ten_vacancies)
]
