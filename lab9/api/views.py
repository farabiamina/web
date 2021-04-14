from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy
# Create your views here.


def show_company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def show_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(company.to_json())


def show_vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def show_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)})
    return JsonResponse(vacancy.to_json())


def show_top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')
    if len(vacancies) > 10:
        vacancies = vacancies[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
