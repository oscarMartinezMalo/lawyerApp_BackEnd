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

            CreateMap<Client, ClientDto>()
                .ReverseMap()
                .ForMember(c => c.Id, opt => opt.Ignore());   // Ignore Id when mapping from Dto to Entity

            CreateMap<LawyerUser, UserDto>().ReverseMap();

            CreateMap<LawyerUser, SignupDto>().ReverseMap();

            CreateMap<LawyerUser, UserLawyerDto>().ReverseMap();

            //CreateMap<LawyerUser, UserDto>().ReverseMap();

        }
    }
}
