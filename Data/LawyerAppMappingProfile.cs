using AutoMapper;
using LawyerApp.Data.Entities;
using LawyerApp.ViewModels;

namespace LawyerApp.Data
{
    public class LawyerAppMappingProfile : Profile
    {
        public LawyerAppMappingProfile()
        {
            CreateMap<Case, CaseDto>().ReverseMap();

            CreateMap<Client, ClientDto>().ReverseMap();

            CreateMap<LawyerUser, LoginResponseDto>().ReverseMap();

            CreateMap<LawyerUser, SignupDto>().ReverseMap();
        }
    }
}
